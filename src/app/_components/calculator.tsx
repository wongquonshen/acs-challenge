import {useState} from "react";

export default function Challenge1() {
    
    const [firstNumber, setFirstNumber] = useState<number | null>(null);
    const [secondNumber, setSecondNumber] = useState<number | null>(null);
    const [total, setTotal] = useState<number | null>(null);

    /**
     * 
     * @param e 
     * handle submit
     */
    const handleFormSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (firstNumber !== null && secondNumber !== null) {
            setTotal(firstNumber + secondNumber);
        }

    }

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="border border-gray-300 rounded-md p-4">
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="firstNumber" className="block text-sm font-medium leading-6 text-gray-900">
                            First Number
                        </label>
                        <input
                            type="number"
                            name="firstNumber"
                            id="firstNumber"
                            value={firstNumber ?? ""}
                            onChange={e => setFirstNumber(parseFloat(e.target.value))}
                            className="block flex-1 border-1 rounded-md bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 mt-2"
                            placeholder="First number"
                        />

                        <label htmlFor="secondNumber" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
                            Second Number
                        </label>
                        <input
                            type="number"
                            name="secondNumber"
                            id="secondNumber"
                            value={secondNumber ?? ""}
                            onChange={e => setSecondNumber(parseFloat(e.target.value))}
                            className="block flex-1 border-1 rounded-md bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 mt-2"
                            placeholder="First number"
                        />

                        <button
                            type="submit"
                            className="w-full rounded bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-4"
                        >
                            Add Two Numbers
                        </button>

                        <label htmlFor="total" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
                            Total :
                        </label>

                        <input
                            type="number"
                            name="total"
                            id="total"
                            value={total ?? ""}
                            className="block flex-1 border-1 rounded-md bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 mt-2"
                            readOnly
                        />
                    </form>
                </div>
            </div>
        </>
    )
}