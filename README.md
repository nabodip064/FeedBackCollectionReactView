# FeedBackCollectionReactView

Please follow the instructions to get the desire output

1. Open the project in visual code
2. execute command ```num start``` to run the project

Enjoy the project

Task has done for call API in React app view

```
import axios from 'axios';
  state = {
        collections: []
    };
    
  constructor() {
        super();
        this.getcollections();
    }

    getcollections = async ()=>{
        let serachKey = '';
        let data = await api.get(serachKey).then(({data}) => data);
        this.setState({collections: data});
    }
```
