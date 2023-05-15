import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GrClose } from "react-icons/gr";

export default function MyModal({ title, icon, children, isOpen, setIsOpen }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl backdrop-filter backdrop-blur-lg ">
                <Dialog.Title
                  as="h3"
                  className="flex justify-between w-full text-lg font-medium leading-6 text-gray-900"
                >
                  <div className="flex items-center gap-1">
                    {title}
                    {icon}
                  </div>

                  <button onClick={() => setIsOpen(false)}>
                    <GrClose />
                  </button>
                </Dialog.Title>
                <div className="mt-2">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
