"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const PhoroDetailsModal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }
  return createPortal(
    <dialog
      ref={modalRef}
      className="flex flex-col p-2 border border-teal-600 rounded-md shadow-md shadow-teal-700 dark:bgj-black dark:bg-opacity-95 dark:text-gray-100"
    >
      <span className="flex justify-end cursor-pointer" onClick={onHide}>
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};

export default PhoroDetailsModal;
