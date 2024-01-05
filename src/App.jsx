import { useState } from 'react';
import data from './data';
import List from './components/List';

/* eslint-disable no-unused-vars */
export default function App() {
    const [list, setList] = useState(data);
    return <List list={list} />;
}
 