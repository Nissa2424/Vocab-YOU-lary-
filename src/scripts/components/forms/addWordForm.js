import clearDom from '../../helpers/data/clearDom';

const addWordForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
    <form id="word-form" class="mb-4">
      <div class="form-group">
        <label for="title">Word Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="wordTitle" placeholder="Enter Words" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Word Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
         <div class="form-group">
        <label for="language">Language</label>
        <input type="text" class="form-control" id="price" placeholder="language" value="${obj.language || ''}" required>
      </div>
         <button type="submit" 
        id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="btn btn-primary">Submit Word
      </button>
    </form>`;
};

export default addWordForm;
