import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getSchoolConfig } from "../services/configService";
import type { SchoolConfig } from "../types/schoolConfig";


interface SchoolConfigContextType {
  config: SchoolConfig | null;
  loading: boolean;
}

const SchoolConfigContext =
  createContext<
    SchoolConfigContextType
  >({
    config: null,
    loading: true,
  });

export const SchoolConfigProvider =
({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [config, setConfig] =
    useState<SchoolConfig | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchConfig =
      async () => {

        try {

          const response =
            await getSchoolConfig();

          setConfig(
            response.data
          );

        } catch (error) {

          console.error(
            "Failed to fetch school config",
            error
          );

        } finally {

          setLoading(false);
        }
      };

    fetchConfig();

  }, []);

  return (
    <SchoolConfigContext.Provider
      value={{
        config,
        loading,
      }}
    >
      {children}
    </SchoolConfigContext.Provider>
  );
};

export const useSchoolConfig =
() => {
  return useContext(
    SchoolConfigContext
  );
};