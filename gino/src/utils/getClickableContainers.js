import {
  AccessTimeFilled,
  FileCopy,
  FolderCopy,
  Link,
  Star,
  Subscriptions
} from '@mui/icons-material';

export const getClickableContainers = () => {
  return [
    {display: 'Recently Used', iconAlt: 'clock', iconName: AccessTimeFilled},
    {display: 'Popular', iconAlt: 'star', iconName: Star},
    {display: 'Documents', iconAlt: 'documents', iconName: FileCopy},
    {display: 'Media', iconAlt: 'media', iconName: Subscriptions},
    {display: 'Web Links', iconAlt: 'links', iconName: Link},
    {display: 'Other', iconAlt: 'folder', iconName: FolderCopy}
  ];
}

export default getClickableContainers;
