import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: role = '', isLoading, error } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,  // Ensure the query runs only when the user is ready and email is valid
        queryFn: async () => {
            try {
                const { data } = await axiosSecure(`/user/${user?.email}`);

                // Ensure that data and role exist
                if (data && data.role) {
                    return data.role;
                } else {
                    console.warn('Role data is missing or undefined for user:', user?.email);
                    return '';  // Return default value to avoid undefined
                }
            } catch (error) {
                console.error('Error fetching role:', error);
                return '';  // Return default value in case of error
            }
        },
    });

    // Log any errors for debugging
    if (error) {
        console.error('Query error:', error);
    }

    // Return the role and loading status
    return [role, isLoading];
};

export default useRole;
