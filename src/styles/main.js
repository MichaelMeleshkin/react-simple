import { StyleSheet } from 'aphrodite';

const lightgray = {
    background: 'lightgray',
    borderRadius: '5px'
};

export default StyleSheet.create({
    gray: {
        ...lightgray,
        background: 'gray',
        display: 'flex',
        flexWrap: 'wrap'
    },
    lightgray: {
        ...lightgray
    }
})