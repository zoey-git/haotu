import { GET, POST} from '@/utils/request'

export const getPhotoList = (params) => {
    return POST('/api/photo_list', params)
}