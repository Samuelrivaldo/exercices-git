// Simple FilterView

class FilterView {
    constructor(containerId, controller) {
        this.container = document.getElementById(containerId);
        this.controller = controller;
        this.render();
    }

    render() {
        const categories = this.controller.getCategories();
        this.container.innerHTML = '<p>Filtres: ' + categories.length + ' categories</p>';
    }
}
