export const navConfig = [
    {
        id: 'institute',
        titleKey: 'nav.institute',
        href: '/about',
        items: [] 
    },
    {
        id: 'education',
        titleKey: 'nav.education',
        href: null,
        subItems: [
            { id: 'foundation', labelKey: 'nav.edu.foundation', href: '/education/foundation' },
            { id: 'pre-college', labelKey: 'nav.edu.pre-college', href: '/education/pre-college' },
            { id: 'vocational', labelKey: 'nav.edu.vocational', href: '/education/vocational' },
            { id: 'college', labelKey: 'nav.edu.college', href: '/education/college' },
            { id: 'post-college', labelKey: 'nav.edu.post-college', href: '/education/post-college' },
            { id: 'miscellaneous', labelKey: 'nav.edu.misc', href: '/education/misc' },
        ]
    },
    {
        id: 'admission',
        titleKey: 'nav.admission',
        href: '/admission',
        items: []
    },
    {
        id: 'posts',
        titleKey: 'nav.posts',
        href: null,
        subItems: [
            { id: 'news', labelKey: 'nav.posts.news', href: '/posts/news' },
            { id: 'articles', labelKey: 'nav.posts.articles', href: '/posts/articles' },
            { id: 'research', labelKey: 'nav.posts.research', href: '/posts/research' },
        ]
    }
];