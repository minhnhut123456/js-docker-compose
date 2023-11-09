import { useCallback, useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { createPost, getPosts } from './apis';

function App() {
  const [data, setData] = useState([]);

  const fetch = useCallback(async () => {
    const res = await getPosts();
    setData(res);
  }, []);

  const update = useCallback(async (newData) => {
    await createPost(newData);
  }, []);

  const handleFinish = async (values) => {
    await update(values);
    fetch();
  };

  useEffect(() => {
    async function init() {
      await fetch();
    }
    init();
  }, [fetch]);

  return (
    <div className="App">
      {data?.length
        && (
        <div>
          <h3>List blog</h3>
          <div>
            {
          data.map((item) => (
            <div>
              {item.title}
              {' '}
              -
              {' '}
              {item.body}
            </div>
          ))
        }
          </div>
        </div>
        )}
      <Form onFinish={handleFinish}>
        <h3>Add new Blog</h3>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input your title!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="body"
          label="Body"
          rules={[{ required: true, message: 'Please input your body!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
