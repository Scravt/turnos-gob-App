
export const SubmitButton = ({ isFormValid, children }) => {
    return (
        <button
            type="submit"
            disabled={!isFormValid}
            className={`rounded-xl p-2 text-base text-center mb-6 ${
                isFormValid ? 'bg-fluColorSuccess' : 'bg-fluColorDarkGray'
            }`}
        >
            {children}
        </button>
    );
};

