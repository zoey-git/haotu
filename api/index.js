import { GET, POST} from '@/utils/request'

export const getPhotoList = (params) => {
    return POST('/api/photo/photo_list', params)
}