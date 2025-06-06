'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  show: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  confirmButtonClass?: string;
  cancelButtonClass?: string;
  loading?: boolean;
};

export default function Modal({
  show,
  title,
  children,
  onClose,
  onConfirm,
  confirmLabel = 'OK',
  cancelLabel = 'Cancel',
  confirmButtonClass = 'btn-primary',
  cancelButtonClass = 'btn-secondary',
  loading = false,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const bsModal = useRef<any>(null);

  useEffect(() => {
    if (!show) return;

    const el = modalRef.current;
    if (el && typeof window !== 'undefined') {
      const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
      bsModal.current = new bootstrap.Modal(el);
      bsModal.current.show();

      el.addEventListener('hidden.bs.modal', onClose);

      return () => {
        el.removeEventListener('hidden.bs.modal', onClose);
        bsModal.current?.hide?.();
        bsModal.current = null;
      };
    }
  }, [show]);

  if (!show) return null;

  return createPortal(
    <div
      className="modal fade"
      tabIndex={-1}
      ref={modalRef}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">

          {title && (
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
          )}

          <div className="modal-body">
            {children}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className={`btn btn_small ${cancelButtonClass}`}
              data-bs-dismiss="modal"
            >
							<span><small>{cancelLabel}</small><small>{cancelLabel}</small></span>
            </button>
            {onConfirm && (
              <button
                type="button"
                className={`btn btn_small ${confirmButtonClass}`}
                onClick={onConfirm}
              >
                
								<span><small>{loading ? '...' : confirmLabel}</small><small>{loading ? '...' : confirmLabel}</small></span>
              </button>
            )}
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
}
