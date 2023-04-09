export class Modal {
    buildModalCard(content) {
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');
        this.modal = this.createDomNode(this.modal, 'div', 'modal');
        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');
        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
        this.modalCloseBtn.innerHTML = '<svg class="modal__close-icon-cross" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="modal__close-icon-cross" fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/></svg>'
        this.closeEvent();
        this.setContent(content);
        this.appendModalCardElements();
    }

    createDomNode(node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node
    };

    setContent(content) {
        this.modalContent.append(content)
    }

    appendModalCardElements() {
        this.modal.append(this.modalCloseBtn);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }

    openModal() {
        document.body.append(this.overlay);
        document.body.classList.add(".body-scroll");
    }

    closeEvent() {
        this.overlay.addEventListener('click', this.closeCardModal);
        this.modalCloseBtn.addEventListener('click', this.closeCardModal);

    }

    closeCardModal(e) {
        let close = e.target.classList;

        if (
            close.contains('overlay') ||
            close.contains("modal__close-icon") ||
            close.contains("modal__close-icon-cross")
        ) {
            document.querySelector('.overlay').remove();
            document.body.classList.remove(".body-scroll");
        }
    }
}