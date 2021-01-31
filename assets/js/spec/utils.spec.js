beforeEach(function () {
  var store = {};

  spyOn(localStorage, 'getItem').and.callFake(function (key) {
    return store[key];
  });
  spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
    return (store[key] = value + '');
  });
  spyOn(localStorage, 'clear').and.callFake(function () {
    store = {};
  });
});

describe('Utils', () => {
  describe('updateChatHistory', () => {
    it('should update local storage with user message', () => {
      updateChatHistory('Test message from User', true);
      expect(localStorage.setItem).toHaveBeenCalled();
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'chat',
        `[{"name":"user","text":"Test message from User","createdAt":"${new Date().toISOString()}"}]`
      );
    });

    it('should update local storage with duck message', () => {
      updateChatHistory('Test message from Rubber Duck', false);
      expect(localStorage.setItem).toHaveBeenCalled();
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'chat',
        `[{"name":"duck","text":"Test message from Rubber Duck","createdAt":"${new Date().toISOString()}"}]`
      );
    });
  });

  describe('downloadChatHistory', () => {
    it('should return JSON formatted data', () => {
      localStorage.setItem(
        'chat',
        '[{"name":"user","text":"This is a test","createdAt":"2021-01-31T10:27:50.659Z"},{"name":"duck","text":"Most likely","createdAt":"2021-01-31T10:27:52.634Z"}]'
      );
      const result = downloadMessageHistory();
      expect(result).toBe(
        'data:application/json,%22%5B%7B%5C%22name%5C%22%3A%5C%22user%5C%22%2C%5C%22text%5C%22%3A%5C%22This%20is%20a%20test%5C%22%2C%5C%22createdAt%5C%22%3A%5C%222021-01-31T10%3A27%3A50.659Z%5C%22%7D%2C%7B%5C%22name%5C%22%3A%5C%22duck%5C%22%2C%5C%22text%5C%22%3A%5C%22Most%20likely%5C%22%2C%5C%22createdAt%5C%22%3A%5C%222021-01-31T10%3A27%3A52.634Z%5C%22%7D%5D%22'
      );
    });
  });
});
