class UserController {
  constructor() {

    console.log("userController foi instaciada ")
    this.addEventBtns();
    this.users = {}

  }


  addLine(user) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td class='table-icon'>${user.getId()}</td>
    <td class='table-icon'><img src='${user.getPhoto()}' alt='Ícone'></td>
    <td class='table-name'>${user.getName()}</td>
    <td class='table-email'>${user.getEmail()}</td>
    <td class='table-phone'>${user.getPhone()}</td>
    <td class='table-date'>${user.getDate()}</td>`;
    if (user.getAdmin()) {
      tr.innerHTML += `
    <td class='table-admin'>Sim</td>`
    } else {
      tr.innerHTML += `  <td class='table-admin'>Não</td>`
    }
    tr.innerHTML += `
      <td class='table-actions'>
      <span class="material-icons-sharp edit-btn">edit</span>
      <span class="material-icons-sharp delete-btn">delete</span>
      </td>`;

      document.querySelector('.users tbody').appendChild(tr)
  }

  readPhoto(data) {
    return new Promise((resolve, reject) => {

      let fr = new FileReader();
      fr.addEventListener('load', () => {
        resolve(fr.result);
      });

      fr.addEventListener('error', (e) => {
        reject(e)
      });

      fr.readAsDataURL(data);
    });

  }

  register() {
    let formEL = document.querySelector('.register');
    let elements = formEL.elements;
    let user;
    let registerData = {};
    [...elements].forEach((v) => {
      switch (v.type) {

        case 'checkbox':
          registerData.admin = v.checked
          break;

        case 'file':
          break;

        default:
          registerData[v.name] = v.value
          break;
      }
    })

    if (JSON.stringify(this.users) == JSON.stringify({})) {

      user = new User(0, registerData.name, '', registerData.email, registerData.phone, registerData.admin, registerData.password);

    } else {
      let lastUser = Object.values({ 'a': 'teste', 'b': 'teste2' })[Object.values({ 'a': 'teste', 'b': 'teste2' }).length - 1];
      user = new User(lastUser.getId() + 1, registerData.name, '', registerData.email, registerData.phone, registerData.admin, registerData.password);
    }
    let fileEL = elements.photo
    if (fileEL.files.length == 0) {
      user.setPhoto('images/icons2,jpg');
      this.addLine(user)
      document.querySelector('form-add').style='none'
      

    } else {
      this.readPhoto(fileEL.files[0]).then((result) => {
        user.setPhoto(result)
        this.addLine(user)
        document.querySelector('form-add').style='none'
      }, (e) => {
        console.error(e)
      })

    }

  
  }



  addEventBtns() {
    document.querySelector('.add').addEventListener('click', () => {
      document.querySelector('.form-add').style.display = 'flex'

    })

    document.querySelectorAll('.close')[0].addEventListener('click', () => {
      document.querySelector('.form-add').style.display = 'none'
    })

    document.querySelectorAll('.check')[0].addEventListener('click', () => {
      this.register();
    })

    document.querySelectorAll('.close')[1].addEventListener('click', () => {
      document.querySelector('.form-add').style.display = 'none'
    })
  }
}