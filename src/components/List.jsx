import { v4 as uuidv4 } from 'uuid';
import { AddFineVideo } from './fineLook';
import { AddFineArticle } from './fineLook';

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <AddFineVideo {...item} key={uuidv4()} />
                );

            case 'article':
                return (
                    <AddFineArticle {...item} key={uuidv4()} />
                );
        }
    });
}
