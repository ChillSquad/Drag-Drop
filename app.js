const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

/* for (const placeholder of placeholders){
    console.log(placeholder);
} */

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
});


function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
    event.target.className = 'item';
    // event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    placeholders.forEach((placeholder) => {
        placeholder.classList.add('highlight');
    });
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function dragdrop(event) {
    event.target.append(item);
    placeholders.forEach((placeholder) => {
        placeholder.className = 'placeholder';
    });
    // event.target.classList.remove('hovered');
}