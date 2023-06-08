export class ItemFacade {
    public async getItems() {
        return [
            { id: "1", name: "item1" },
            { id: "2", name: "item2" },
        ]
    }
}