import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import tt from 'counterpart';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { TabLink } from 'golos-ui/Tab';
import SlideContainer from 'src/app/components/common/SlideContainer';
import LayoutSwitcher from 'src/app/components/common/LayoutSwitcher';
import { MAX_WIDTH, BASE_MARGIN, MOBILE_WIDTH, MOBILE_MARGIN } from '../../common/Container';

const SlideContainerStyled = styled(SlideContainer)`
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
`;

const Container = styled.div`
    flex: 1 0;
    max-width: ${MAX_WIDTH}px;
    margin: 0 auto;

    @media (max-width: ${MAX_WIDTH + BASE_MARGIN * 2}px) {
        margin: 0;
        padding: 0 ${BASE_MARGIN}px;
    }

    @media (max-width: ${MOBILE_WIDTH}px) {
        padding: 0 ${MOBILE_MARGIN}px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex: 1 0;
    margin: 0 -3px;
`;

const TabLinkStyled = styled(TabLink)`
    height: 50px;
    padding: 0 12px;

    &.${({ activeClassName }) => activeClassName} {
        :after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: #333;
        }
    }
`;
TabLinkStyled.defaultProps = {
    activeClassName: 'active',
};

const Right = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;

@connect(state => ({
    myAccountName: state.user.getIn(['current', 'username']),
}))
export default class Navigation extends PureComponent {
    static propTypes = {
        myAccountName: PropTypes.string,
    };

    render() {
        const { myAccountName, className } = this.props;

        const tabLinks = [];

        if (myAccountName) {
            tabLinks.push({ value: tt('header_jsx.home'), to: `/@${myAccountName}/feed` });
        }

        tabLinks.push(
            { value: tt('g.new'), to: '/created' },
            { value: tt('main_menu.hot'), to: '/hot' },
            { value: tt('main_menu.trending'), to: '/trending' },
            { value: tt('g.promoted'), to: '/promoted' }
        );

        return (
            <SlideContainerStyled className={className}>
                <Container>
                    <Wrapper>
                        {tabLinks.map(({ value, to }) => (
                            <TabLinkStyled key={to} to={to}>
                                {value}
                            </TabLinkStyled>
                        ))}
                        <Right>
                            <LayoutSwitcher />
                        </Right>
                    </Wrapper>
                </Container>
            </SlideContainerStyled>
        );
    }
}
