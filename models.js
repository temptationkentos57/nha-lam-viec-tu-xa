class Project {
    constructor(id, title, freelancerId, description) {
        this.id = id;
        this.title = title;
        this.freelancerId = freelancerId;
        this.description = description;
    }

    updateDetails(title, description) {
        if (!title || !description) {
            throw new Error('Title and description cannot be empty and must be provided.');
        }
        this.title = title;
        this.description = description;
    }
}

module.exports = { Project };