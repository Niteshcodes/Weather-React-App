module.exports = function(api) {
    api.cache(true);
  
    const presets = ['@babel/preset-env', '@babel/preset-react'];
    const plugins = ['babel-plugin-styled-components', 'inline-react-svg'];
  
    return {
      presets,
      plugins,
      
    };
  };
  