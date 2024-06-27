'use client'
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation'
import SearchIcon from '../../../public/icons/search2.svg';
import styles from './Search.module.css';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const navigate = useNavigate();
  const router = useRouter()

  const handleChange = event => {
    // console.log(event.target.value);
    setSearchQuery(event.target.value);
  }; 

  const handleSubmit = event => {
    event.preventDefault();

    if (!searchQuery) {
      return;
    }
//Получаю фразу введенную пользователем из инпута,
//формирую из нее url и перенаправляю пользователя на этот url
    const url = `/search?title=${searchQuery}`;
    setSearchQuery('');
    // navigate(url);
    router.push(url);
  };

  return (
    <form className={styles.formWrap} onSubmit={handleSubmit}>
      <input
        className={styles.search}
        type="search"
        name="search"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Искать в магазине"
      ></input>
      <button className={styles.button}>
        <SearchIcon className={styles.svgSearch} />
      </button>
    </form>
  );
};

