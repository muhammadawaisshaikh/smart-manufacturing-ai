import React, { useState } from "react";

type ContactModalProps = {
    toggleModal: () => void;
};

type FormState = {
    name: string;
    email: string;
    message: string;
};

const ContactModal: React.FC<ContactModalProps> = ({ toggleModal }) => {
    const closeModal = () => toggleModal();

    const [formState, setFormState] = useState<FormState>({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <>
            <div className="bg-white w-full h-full fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-90">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold mb-4">Request a Demo</h2>
                        <button
                            onClick={() => closeModal()}
                            className="bg-cyan-800 text-white px-4 py-2 rounded hover:bg-cyan-600"
                        >
                            Close
                        </button>
                    </div>
                    <div className="my-5">
                        <form onSubmit={handleSubmit} className="p-0">
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your message"
                                    rows={5}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-cyan-800 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ContactModal;
