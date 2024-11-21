export const CheckboxField = ({ name, checked, onChange }) => {
    return (
        <label htmlFor={name} className='text-base'>
            <input
                className='mr-2'
                type="checkbox"
                name={name}
                id={name}
                checked={checked}
                onChange={onChange}
            />
            Recordarme
        </label>
    );
};
