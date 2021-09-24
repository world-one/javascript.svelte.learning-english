// import preprocess from 'svelte-preprocess';

// const config = {
// 	// Consult https://github.com/sveltejs/svelte-preprocess
// 	// for more information about preprocessors
// 	preprocess: preprocess(),
// };

// export default config;


module.exports = {
  preprocess: {
     style: async ({content, attributes}) => {
        if (attributes.type !== 'text/postcss') return;
        return new Promise((resolve, reject) => {
           resolve({code: '', map: ''});
        });
     },
  },
};
