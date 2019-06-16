import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProduct } from '../services/products';

/**
 * useState可以设置function定义组件的局部状态
 * useEffect可以模拟class定义组件的生命周期函数,监听数据的改变
 * 响应，可以监听指定数据改变之后触发
 */
function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);
  const [list, setList] = useState([]);
  //const loadMore = () => {};
  /**
   * 第二个参数为[]表示只在初始化的时候执行一次
   */
  useEffect(() => {
    console.log('初始化的时候执行一次');
  }, []);
  /**
   * 只要数据改变了都会执行
   */
  useEffect(() => {
    console.log('执行了');
  });
  /**
   * 只有指定的数据改变之后才会执行
   */
  useEffect(() => {
    //console.log('当前页码改变了');
    async function a() {
      const result = await getProduct(currentPage);
      setList(result.data.products);
    }
    // axios
    //   .get('https://api.cat-shop.penkuoer.com/api/v1/products', {
    //     params: {
    //       page: currentPage,
    //     },
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //     setList(res.data.products);
    //   });
    a();
  }, [currentPage]);

  return (
    <div>
      <h1>列表页</h1>
      <ul>
        {list.map(item => (
          <li key={item._id}>
            <Link to={{ pathname: `/list/${item._id}?id=${item._id}` }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <h5>当前页码为{currentPage}</h5>
      <button onClick={() => setCount(count + 1)}>改变count</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>加载更多</button>
    </div>
  );
}

export default List;
