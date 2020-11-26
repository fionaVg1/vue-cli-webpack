const resize = {
    inserted(el, binding) {
        const callback = binding.value;
        const direction = binding.arg;
        const modifiers = binding.modifiers;
        const result = () => {
            return direction === 'vertical' ? window.innerHeight : window.innerWidth;
        }
        window.addEventListener('resize', () => callback(result()));
        if (!modifiers || !modifiers.quiet) {
            callback(result());
        }
        el._onResize = callback;
    },
    unbind(el) {
        if (!el._onResize) {
            return;
        }
        window.removeEventListener('resize', el._onResize);
        delete el._onResize;
    }

};
export default resize;