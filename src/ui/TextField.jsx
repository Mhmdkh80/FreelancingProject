function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 font-bold">
        {label}
      </label>
      <input
        className="textField__input mt-2"
        type="tel"
        maxLength="11"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="false"
      />
    </div>
  );
}

export default TextField;
