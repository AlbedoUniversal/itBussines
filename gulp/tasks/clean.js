import del from 'del';

const clean = () => del($.path.dest.root);

export default clean;
