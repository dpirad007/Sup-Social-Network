import React ,{ useState, useEffect }from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';

import styles from './StatePicker.module.css';

import { fetchMahaData } from '../../api/index';

const StatePicker = ({ handleStateChange }) => {

    const [fetchedState, setfetchedState] = useState([]);

    useEffect(() => {
        const fetchStateAPI = async() => {
            setfetchedState(await fetchMahaData());
        }

        fetchStateAPI();
    },[setfetchedState]);

    //console.log(fetchedState)

    return (
        <div>
        <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
            {fetchedState.map((country,i) => {
                return <option key={i} value={country}>{country}</option>
            })}
        </NativeSelect>
        </FormControl>
        </div>
    )
}

export default StatePicker;