class Project {
    constructor(id, title, freelancerId, description) {
        this.id = id;
        this.title = title;
        this.freelancerId = freelancerId;
        this.description = description;
    }

    updateDetails(title, description) {
        this.title = title;
        this.description = description;
    }
}

module.exports = { Project };