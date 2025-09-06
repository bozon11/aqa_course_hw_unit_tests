async function createTodo(todoBody) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoBody),
    });

    if (response.status !== 201) {
      throw new Error(`Status is not 201. Got: ${response.status}`);
    }

    const todoObject = await response.json();

    if (todoObject.id !== 201) {
      throw new Error(`ID is not 201. Got: ${todoObject.id}`);
    }

    return todoObject;
  } catch (error) {
    console.log('Error:', error.message);
    throw error;
  } finally {
    console.log('работа функции завершена');
  }
}

// createTodo({ title: 'Test', userId: 1 })
//   .then(result => console.log('Результат:', result))
//   .catch(error => console.log('Ошибка:', error.message));
