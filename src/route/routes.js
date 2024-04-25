import {BOOKLETS_PATH} from './paths.js'
import BookletsListPage from '../components/features/booklet/BookletsListPage.vue'
import BookletDetailPage from '../components/features/booklet/BookletDetailPage.vue'

export const routes = [
    { path: BOOKLETS_PATH, component: BookletsListPage },
    { path: `${BOOKLETS_PATH}/:id`, component: BookletDetailPage, props: true }
];