import moment from 'moment';

class ToDo {

    constructor(id, todo, createdAt, updatedAt, deadline, categoryId) {
        this.id = id;
        this.todo = todo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deadline = deadline;
        this.categoryId = categoryId;
    }

    get getDeadline() {
        return moment(this.deadline).format("MMMM Do YYYY");
    }
}

export default ToDo;