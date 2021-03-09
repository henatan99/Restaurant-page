const inputItem = (name, label) => {
    const labelTag = '<label for="' + name + '">' + label + '</label>';
    const inputTag = '<input type="text" name="' + name + '"></inpuut>';
    return (labelTag + inputTag);    
}


const contactPage = () => {
    const contactDiv  = document.createElement('div');
    contactDiv.classList.add('form-div');
    const formTitle = '<h1 class="contact-title">Contact Us</h1>';
    const names = ['name', 'job-title', 'restaurant', 'email', 'phone'];
    const labels = ['Name', 'Job Title', 'Restaurant', 'Email', 'Phone'];
    let inputs = '';
    for(let i=0; i<names.length; i++) {
        inputs += inputItem(names[i], labels[i]);
    }
    const textArea = '<textarea name="message" id="message" cols="20" rows="5" class="message"></textarea>';
    const button = '<button>Submit</button>';
    contactDiv.innerHTML = formTitle + '<form>' + inputs + textArea + button + '</form>';
    return contactDiv;
}

export { contactPage } 