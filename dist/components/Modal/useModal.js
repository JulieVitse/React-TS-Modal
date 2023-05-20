import { useState } from "react";
export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    if (typeof window !== "undefined") {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }
    return {
        isOpen,
        openModal,
        closeModal,
    };
};
