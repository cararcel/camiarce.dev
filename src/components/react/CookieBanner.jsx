import Wine from '../icons/Wine';
import { useState } from 'react';

export default function Modal({ trans }) {
    const [isOpen, setIsOpen] = useState(true);
    const [isFull, setIsFull] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const emptyGlass = () => setIsFull(false);
    const fullGlass = () => setIsFull(true);

    return (
        <div className="p-2 fixed bottom-10 left-10">
            {isOpen && (
                <div className="w-min mb-5 p-2 bg-white border-2 border-black shadow-black rounded-lg">
                    <div className="">{trans.text}</div>

                    <div className="flex flex-row gap-2 mt-2">
                        <button
                            className="flex
                    items-center
                    gap-1
                    font-extrabold
                    rounded-lg
                    shadow-black-small
                    border-2
                    border-black
                    px-2
                    py-1"
                            onClick={() => {
                                closeModal();
                                fullGlass();
                                setTimeout(() => {
                                    emptyGlass();
                                }, 4000);
                            }}
                        >
                            {trans.accept}
                        </button>
                        <button
                            className="flex
                    items-center
                    gap-1
                    font-extrabold
                    rounded-lg
                    shadow-black-small
                    border-2
                    border-black
                    px-2
                    py-1"
                            onClick={() => {
                                closeModal();
                                emptyGlass();
                            }}
                        >
                            {trans.reject}
                        </button>
                    </div>
                </div>
            )}
            <button
                className="relative bg-white overflow-hidden border-2 border-black hover:shadow-black-small-raised hover:-translate-x-1 hover:-translate-y-1 transition shadow-black-small p-4 rounded-full"
                onClick={openModal}
            >
                <span className="relative z-10">
                    <Wine />
                </span>
                <div
                    className={`absolute left-0 right-0 bottom-0 z-0 pointer-events-none transition-all duration-1000 ease-in-out ${
                        isFull ? 'h-full bg-pink-300' : 'h-0 bg-white'
                    }`}
                />{' '}
            </button>
        </div>
    );
}
