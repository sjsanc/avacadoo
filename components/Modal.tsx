import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

interface ModalProps {
    show: boolean;
    onClose: () => void;
    size: "md" | "lg" | "sm" | "xs";
}

const Modal: React.FC<ModalProps> = (props) => {
    return (
        <Transition appear show={props.show} as={Fragment}>
            <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={props.onClose}>
            <div className="min-h-screen px-4 text-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>
    
                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="inline-block h-screen align-middle" aria-hidden="true">
                &#8203;
                </span>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <div className={`inline-block w-full max-w-${props.size} p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl`}>
                        { props.children }
                </div>
                </Transition.Child>
            </div>
            </Dialog>
        </Transition>
    )
}

export default Modal;