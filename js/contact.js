/* ============================================
   聯繫頁：表單驗證與送出
   ============================================ */

class ContactForm {
  constructor() {
    this.form = document.querySelector('.contact-form');
    this.submitBtn = document.querySelector('.form-submit');
    this.successBox = document.querySelector('.form-success');

    /* === Web3Forms 接入點 ===
     * 1. 到 https://web3forms.com 輸入要收信的 Email，取得 Access Key（寄到信箱）
     * 2. 把下方 accessKey 的 null 改成那串 Key
     * 3. 表單就會真的寄信到該 Email
     */
    this.endpoint = 'https://api.web3forms.com/submit';
    this.accessKey = 'a4bddd5d-b571-4b54-88c7-4568f1d26d4e';
    this.formspreeEndpoint = this.accessKey ? this.endpoint : null;

    this.init();
  }

  init() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));

    // 即時驗證（離開欄位時驗證）—— 但僅在非示意模式下啟用
    if (this.formspreeEndpoint) {
      this.form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));

        // 輸入時清除錯誤狀態
        input.addEventListener('input', () => {
          const field = input.closest('.form-field');
          if (field) field.classList.remove('error');
        });
      });
    }
  }

  validateField(input) {
    const field = input.closest('.form-field');
    if (!field) return true;

    const value = input.value.trim();
    const isRequired = input.hasAttribute('required');
    const isEmail = input.type === 'email';

    // 必填檢查
    if (isRequired && !value) {
      this.showError(field, this.getMessage('required'));
      return false;
    }

    // Email 格式檢查
    if (isEmail && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.showError(field, this.getMessage('invalid.email'));
        return false;
      }
    }

    // 通過驗證
    field.classList.remove('error');
    return true;
  }

  validateAll() {
    let allValid = true;
    this.form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
      if (!this.validateField(input)) allValid = false;
    });
    return allValid;
  }

  showError(field, message) {
    field.classList.add('error');
    const errorEl = field.querySelector('.form-error');
    if (errorEl) errorEl.textContent = message;
  }

  /* 從目前語言取訊息 */
  getMessage(key) {
    const lang = localStorage.getItem('lang') || 'zh-TW';
    if (typeof translations !== 'undefined' && translations[lang]) {
      return translations[lang][`contact.form.${key}`] || key;
    }
    return key;
  }

  async handleSubmit(e) {
    e.preventDefault();

    // 示意模式：完全不送出、不驗證
    if (!this.formspreeEndpoint) {
      return;
    }

    if (!this.validateAll()) return;

    // 鎖定按鈕
    this.submitBtn.disabled = true;
    const submitTextEl = this.submitBtn.querySelector('span');
    const originalText = submitTextEl ? submitTextEl.textContent : '';
    if (submitTextEl) submitTextEl.textContent = this.getMessage('sending');

    // 收集表單資料
    const formData = new FormData(this.form);
    formData.append('access_key', this.accessKey);
    formData.append('from_name', 'Naomi 作品集網站');
    formData.set('subject', `［作品集來信］${formData.get('subject') || ''}`);

    try {
      // 真實送出（透過 Formspree）
      const response = await fetch(this.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        this.showSuccess();
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error('Form submit error:', err);
      alert(this.getMessage('error'));
      this.submitBtn.disabled = false;
      if (submitTextEl) submitTextEl.textContent = originalText;
    }
  }

  showSuccess() {
    this.form.style.display = 'none';
    if (this.successBox) {
      this.successBox.classList.add('visible');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ContactForm();
});
