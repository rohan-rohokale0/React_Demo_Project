import { useTheme } from '@mui/joy/styles/ThemeProvider';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

// styled components
const BreadcrumbRoot = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center'
});

const BreadcrumbName = styled('h4')({
  margin: 0,
  fontSize: '16px',
  paddingBottom: '1px',
  verticalAlign: 'middle',
  textTransform: 'capitalize'
});

const SubName = styled('span')(({ theme }) => ({
  textTransform: 'capitalize',
  color: theme.palette.text.secondary
}));

const Separator = styled('h4')(({ theme }) => ({
  margin: 0,
  marginLeft: 8,
  paddingBottom: '3px',
  //color: theme.palette.text.hint
}));

const StyledIcon = styled(Icon)({
  marginLeft: 8,
  marginBottom: '4px',
  verticalAlign: 'middle'
});

const Breadcrumb = ({ routeSegments }:any) => {
  const theme = useTheme();
  //const hint = theme.palette.text.hint;

  return (
    <BreadcrumbRoot>
      {routeSegments ? (
        <Hidden xsDown>
          <BreadcrumbName>{routeSegments[routeSegments.length - 1]['name']}</BreadcrumbName>
          <Separator>|</Separator>
        </Hidden>
      ) : null}

      <Breadcrumbs
        separator={<Icon sx={{ color: "black" }}>navigate_next</Icon>}
        sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}
      >
        <NavLink to="/">
          <StyledIcon color="primary">home</StyledIcon>
        </NavLink>

        {routeSegments
          ? routeSegments.map((route:any, index:any) => {
              return index !== routeSegments.length - 1 ? (
                <NavLink key={index} to={route.path}>
                  <SubName>{route.name}</SubName>
                </NavLink>
              ) : (
                <SubName key={index}>{route.name}</SubName>
              );
            })
          : null}
      </Breadcrumbs>
    </BreadcrumbRoot>
  );
};

export default Breadcrumb;
