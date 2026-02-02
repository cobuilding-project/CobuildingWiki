// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '📕 Правила',
      link: {
        type: 'doc',
        id: 'rules/index'
      },
      items: ['rules/modifications'],
    },
    {
      type: 'category',
      label: '🥸 Roleplay',
      link: {
        type: 'doc',
        id: 'roleplay/index'
      },
      items: ['roleplay/government_structure','roleplay/lore'],
    },{
      type: 'category',
      label: '💸 Подписки',
      link: {
        type: 'doc',
        id: 'subscription/index'
      },
      items: ['subscription/nitro','subscription/nitroplus'],
    },
  ],
   
};

export default sidebars;
