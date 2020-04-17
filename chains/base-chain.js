class BaseChain {
    constructor (data, next) {
        this.data = data;
        this.next = next;
    }

    async execute() {
        if (this.next) {
            return await this.next.execute();
        } else {
            // ??
            console.log("Chaing ended.");
        }
    }
}

module.exports = BaseChain;