class Api { 
  constructor({baseUrl, headers}) { 
    this._baseUrl = baseUrl; 
    this._headers = headers 
  } 

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
  } 
 
  getInitialCards() { 
    return fetch(`${this._baseUrl}/cards`, { 
      headers: this._headers 
  }) 

    .then((res) => this._getResponseData(res));
  } 
 
  getUserInfo() { 
    return fetch(`${this._baseUrl}/users/me`, { 
      headers: this._headers 
  }) 
  .then((res) => this._getResponseData(res));
  }
   
  addCard(title, link) { 
    return fetch(`${this._baseUrl}/cards`, { //отправляем запрос на сервер, даем 2 аргумента: ссылку запрашиваемого ремурса (я почитала о шаблонных строках))) и обънект опций, состоящий из:
      method: 'POST', //метод запроса
      headers: this._headers, //заголовки запроса
      body: JSON.stringify({ //тело запроса в виде строки в формате json
        name: title, //передаем 2 перем из Card
        link: link 
      }) 
    }) 
    .then((res) => this._getResponseData(res));//если запрос успешный, то применяем приватный мметод, сохраняющий данные в формате json
  }; 
 
  editUserInfo(data) { 
    return fetch(`${this._baseUrl}/users/me`, { 
      method: 'PATCH', 
      headers: this._headers, 
      body: JSON.stringify({ 
        name: data.name, 
        about: data.about 
      }) 
    }) 
    .then((res) => this._getResponseData(res));
  }
 
    newAvatar(link) { 
      return fetch(`${this._baseUrl}/users/me/avatar`, { 
        method: 'PATCH', 
        headers: this._headers, 
        body: JSON.stringify({ 
          avatar: link,
        }) 
      }) 
      .then((res) => this._getResponseData(res));
    }

    changeLikeCardStatus(cardId, isLiked) {
      return fetch(`${this._baseUrl}/cards/likes/${cardId}`, { 
        method: !isLiked ? 'DELETE' : 'PUT',
        headers: this._headers, 
      })
      .then((res) => this._getResponseData(res));
    }
 
    deleteCard(cardId) { 
      return fetch(`${this._baseUrl}/cards/${cardId}`, { 
        method: 'DELETE', 
        headers: this._headers, 
      }) 
      .then((res) => this._getResponseData(res));
    } 
} 

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-24',
  headers: {
  authorization: '9d5a0019-b096-496e-ade0-699f2874ec7a',
  'Content-Type': 'application/json'
  }
})

export default api;


