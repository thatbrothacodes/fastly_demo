import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface IComponentPropTypes extends RouteComponentProps {
    items: Record<number, any>,
    count: number,
    onMoreClick: () => void
};

export default withRouter((props: IComponentPropTypes) => {
    const handleItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        id: number
    ) => {
        props.history.push(`/contacts/${id}`);
    }

    const handleLoadMoreClick = () => {
        props.onMoreClick();
    }

    return (
        <List>
            {Object.values(props.items).map((element) => (
                <ListItem button key={element.id}>
                    <ListItemText onClick={e => handleItemClick(e, element.id)} primary={element.name} />
                </ListItem>
            ))}
            {Object.values(props.items).length < props.count &&
                <ListItem button key="load_more">
                    <ListItemText onClick={handleLoadMoreClick} primary="Load More" />
                </ListItem>
            }
        </List>
    );
});
