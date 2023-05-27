/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number
  height: string
  width: string
  public_id: string
  format: string
  blurDataUrl?: string
}

export interface SharedModalProps {
  index: number
  images?: any[]
  currentPhoto?: any
  changePhotoId: (newVal: number) => void
  closeModal: () => void
  navigation: boolean
  direction?: number
}
