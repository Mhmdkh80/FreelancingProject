function SendOtpForm() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">شماره موبایل</label>
          <input
            className="w-full py-3 px-4 rounded-xl text-secondary-900 border border-gray-100 outline-none"
            type="text"
          />
        </div>
        <button>ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOtpForm;
