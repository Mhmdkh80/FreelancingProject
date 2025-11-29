function SendOtpForm() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">شماره موبایل</label>
          <input type="text" />
        </div>
        <button>ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOtpForm;
